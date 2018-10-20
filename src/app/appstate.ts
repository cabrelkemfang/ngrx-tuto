import { Article } from "./models/article";

export interface Appstate {
    article:Article[];
    message:String;
}
