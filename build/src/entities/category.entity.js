"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(props) {
        this.id = props.id;
        this.title = props.title;
        this.color = props.color.toUpperCase();
    }
}
exports.Category = Category;
