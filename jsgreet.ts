class JavaScriptGreeter extends Greeter{
    override greet(name:string) {
        return 'console.log(this.greet(name))';
    }
}