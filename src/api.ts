import { dataview } from "./serializer";

/**
 * Simple Time Tracker API v1 interface
 */
export interface SttApi {
    /**
     * Get data from `Simple Time Tracker` & convert it to `Dataview` readable format
     * @param path - Path to file, where `Simple Time Tracker` store data. Leave empty to scan all vault
     * @param type - Format of storage data by `Simple Time Tracker`
     * @example `json`, `text`, `table`
     * 
     * @returns {string} A converted string for default `DataviewJS` table function
     */
    dataview(opt: {path?: string, type?: string}): string;
}

/**
 * Factory method for API v1
 *
 * @param app - The Obsidian App
 */
export const sttApi = (): SttApi => {
    return {
        dataview: (opt: {path?: string, type?: string}): string => {
            return dataview(opt);
        },
    };
};