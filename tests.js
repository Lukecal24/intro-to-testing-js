// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//sayHello
describe( "sayHello", function(){
    it('should be  defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should be  defined string', function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when passed "Jane"', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when passed "Alex"', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when passed "Pat"', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when called without input', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed boolean true', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed boolean false', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

// isFive
describe( "isFive", function() {
    it('should be  defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean output', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return false when passed the number 4', function () {
        expect(isFive(4)).toBe(false);
    });
    it('should return false when passed the number 6', function () {
        expect(isFive(6)).toBe(false);
    });
    it('should return true when passed the number 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when passed the number 2', function () {
        expect(isFive(2)).toBe(false);
    });
    it('should return true when passed the string "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});