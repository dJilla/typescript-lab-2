class HtmlGreeter extends Greeter {
    tagName:string;

    constructor(greeting:string, tagName:string) {
        super(greeting);
        this.greeting = greeting;
        this.tagName = tagName;
    }

    override greet(name:string) {
        return `<h1>${this.greeting}, ${name}!</h1>`;
    }
}