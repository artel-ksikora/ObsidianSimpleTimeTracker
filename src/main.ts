import { Plugin } from "obsidian";
import { defaultSettings, SimpleTimeTrackerSettings } from "./settings";
import { SimpleTimeTrackerSettingsTab } from "./settings-tab";
import { displayTracker, loadTracker } from "./tracker";
import { sttApi } from './api';

export default class SimpleTimeTrackerPlugin extends Plugin {

    settings: SimpleTimeTrackerSettings;

    get api() {
        return sttApi();
    }

    async onload(): Promise<void> {
        await this.loadSettings();

        this.addSettingTab(new SimpleTimeTrackerSettingsTab(this.app, this));

        this.registerMarkdownCodeBlockProcessor("simple-time-tracker", async (s, e, i) => {
            let tracker = await loadTracker(s);
            e.empty();
            displayTracker(tracker, e, i.sourcePath, () => i.getSectionInfo(e), this.settings);
        });

        this.addCommand({
            id: `insert`,
            name: `Insert Time Tracker`,
            editorCallback: (e, _) => {
                e.replaceSelection("```simple-time-tracker\n```\n");
            }
        });
    }

    async loadSettings(): Promise<void> {
        this.settings = Object.assign({}, defaultSettings, await this.loadData());
    }

    async saveSettings(): Promise<void> {
        await this.saveData(this.settings);
    }
}