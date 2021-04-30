import { reduceNumbersToSum, reduceNumbersToSumWithForEach, reduceNumbersToSumWithForLoop } from "../../src/reduce";

describe( "reduce", () => {
	it( "reduces a list of numbers to the sum off all entries", () => {
		const input = [ 1, 2, 3, 4, 5 ];

		const result = reduceNumbersToSumWithForLoop( input );

		expect( 15 ).toStrictEqual( result );
	} );

	it( "reduces a list of numbers to the sum off all entries", () => {
		const input = [ 1, 2, 3, 4, 5 ];

		const result = reduceNumbersToSumWithForEach( input );

		expect( 15 ).toStrictEqual( result );
	} );

	it( "reduces a list of numbers to the sum off all entries", () => {
		const input = [ 1, 2, 3, 4, 5 ];

		const result = reduceNumbersToSum( input );

		expect( 15 ).toStrictEqual( result );
	} );
} );
