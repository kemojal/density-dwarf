export interface tagProps {
    word: string;
}
export interface editorProps{
    id: string;
    name: string;
}
export interface listProps {
    _id: string;
	title: string;
	created_at: string;
	tags: tagProps[];
    editors: editorProps[];

}