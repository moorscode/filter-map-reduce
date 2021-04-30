import { mapNumbersToFizzBuzz, mapSquareNumbers, mapUnevenToNextEvenNumber, mapUsersToUsernames } from "../../src/map";
import { User } from "../../src/types/user";

describe( "map", () => {
	it( "maps the uneven numbers to the next even number", () => {
		const input    = [ 1, 2, 3, 4 ];
		const expected = [ 2, 2, 4, 4 ];

		const result = mapUnevenToNextEvenNumber( input );

		expect( result ).toStrictEqual( expected );
	} );

	it( "maps the value of a number to its square", () => {
		const input    = [ 1, 2, 3, 4 ];
		const expected = [ 1, 4, 9, 16 ];

		const result = mapSquareNumbers( input );

		expect( result ).toStrictEqual( expected );
	} );

	it( "maps the list of users to a list of usernames", () => {
		const user1: User = {
			name: "Jip",
			hairColor: "brown",
		};

		const user2: User = {
			name: "Joost",
			hairColor: "none",
		};

		const expected = [ "Jip", "Joost" ];

		const input = [ user1, user2 ];

		const result = mapUsersToUsernames( input );

		expect( result ).toStrictEqual( expected );
	} );

	it( "maps a list of numbers to a fizz-buzz sequence", () => {
		const input    = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
		const expected = [ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz" ];

		const result = mapNumbersToFizzBuzz( input );

		expect( result ).toStrictEqual( expected );
	} );
} );
