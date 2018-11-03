//testing typescript for the first time
// console.log("typescript works!");

//using the strong typing feature
const number = 5;
const age: number = 23;
const fName: string = 'jamal';
const friends: string[] = ['jamal1', 'jamal2', 'jamal3'];
const descr: any[] = [166, 'cm', 54, 'kg'];
const qualified: boolean = true;

//using enums feature
enum color {
	Red,
	Green,
	Blue
}
console.log(color.Red);

// type assertion
const message: any = 'the sentence tests the length property';
let lengthOfMessage = (<string>message).length;
let lengthOfMessage2 = (message as string).length;

//custom types
let drawPoint = (point: { x: number; y: number }) => {
	point.x + point.y;
};
drawPoint({
	x: 1,
	y: 2
});

// interfaces
interface Point {
	x: number;
	y: number;
}

let drawPoint2 = (point: Point) => {
	point.x + point.y;
};
// classes
class PointClass {
	a: number = 12;
	b: number = 2;
	draw() {
		this.a + this.b;
	}
}

// constructors
class PointsClass {
	constructor(public a: number, public b: number) {}
	drawPoint() {
		this.a + this.b;
	}
}

// access modifiers
class PointssClass {
	constructor(private x: number, private y: number) {}
	drawPoint() {
		this.x + this.y;
	}
}
