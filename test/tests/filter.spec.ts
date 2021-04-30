import { removeNumberFourFromArray, removeUsersWithoutHair } from "../../src/filter";
import { User } from "../../src/types/user";

describe( "filter", () => {
	it( "filters the number four from a list of numbers", () => {
		const input = [ 1, 2, 3, 4 ];

		const result = removeNumberFourFromArray( input );

		expect( result ).not.toContainEqual( 4 );

		expect( result ).toContainEqual( 1 );
		expect( result ).toContainEqual( 2 );
		expect( result ).toContainEqual( 3 );
	} );

	it( "filters objects that meet a criteria from a list of objects", () => {
		const hairyUser: User = {
			name: "Jip",
			hairColor: "brown",
		};

		const boldUser: User = {
			name: "Joost",
			hairColor: "none",
		};

		const input = [
			hairyUser,
			boldUser,
		];

		const result = removeUsersWithoutHair( input );

		expect( result ).not.toContainEqual( boldUser );

		expect( result ).toContainEqual( hairyUser );
	} );
} );
