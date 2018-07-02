export class ImageModel {
    id: number;
    path: string;
    tags: string[];

    addTag(tag: string) {
        if (tag != '' && !this.tags.includes(tag)) {
            this.tags.push(tag);
        }
    }
}
