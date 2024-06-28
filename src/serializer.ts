import { TFile } from "obsidian";
import { Tracker, fixLegacyTimestamps } from "./tracker";

const contentFormats = [
    "json",
    "table",
    "text",
];

export function dataview(opt: {path?: string, type?: string}): string{


    return "";
}

function exportData(data: string, type?: string){
    console.log("exportData");
    switch(type){
        case "table":
            
        break;
        case "text":
            
        break;
        case "json":
            try {
                console.log(111);
                
                let ret = JSON.parse(data);
                console.log(222);
                
                fixLegacyTimestamps(ret.entries);
                console.log(333);
                
                return ret;
            } catch (e) {
                console.log(`Failed to parse Tracker from ${data}`);
            }
        break;
    }
}

export async function getContent(path: string): Promise<string>{
    console.log("getContent");
    let file = app.vault.getAbstractFileByPath(`${path}.md`) as TFile;
    if (!file) return;
    let content = await app.vault.read(file);

    const regex = /\{\S(entries)\S:\[\{[\w\W]{10,}\}\]\}/gi;
    const match = content.match(regex);

    console.log(match);
    
    
    if (match && match[0]) {
        const jsonString = match[0];
        return jsonString;
    } else {
        console.log('JSON string not found.');
    }

    return "";
}

export async function loadData(json: string): Promise<Tracker> {
    console.log("loadData");
    let data: any = {entries: []};


    // const
    // let file = app.workspace.getActiveFile();
    // console.log("cachedRead", await app.vault.cachedRead(file));
    // console.log(await app.vault.adapter.mkdir("stt"));
    // console.log(await this.app.plugins.loadPlugin('simple-time-tracker'));
   

    
    
    try{
        let lines: string[] = json.split("\n");
        let type: string = 'json';
    
        for (let line of lines) {
            if(contentFormats.some(cf => cf === line)){
                type = line;
            }
    
            if(line.includes("entries") || line.includes("from")){
                if(line.includes("from")){
                    line = await getContent(line.replace("from ", ""));
                }

                if(!line) return data;
               
                data = exportData(line, type);
            } 
        }
    }catch{
        console.log(`Failed to get Tracker Data from ${json}`);
    }

    return data;
}

