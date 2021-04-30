import { FizzBuzzEntry } from "./types/fizzbuzzentry";
import { User } from "./types/user";

export function mapSquareNumbers( input: number[] ): number[] {
	return input.map( ( value: number ) => value * value );
}

export function mapUnevenToNextEvenNumber( input: number[] ): number[] {
	return input.map( ( value: number ) => ( value & 1 ) === 1 ? value + 1 : value );
}

export function mapUsersToUsernames( input: User[] ): string[] {
	return input.map( ( user: User ) => user.name );
}

export function mapNumbersToFizzBuzz( input: number[] ): FizzBuzzEntry[] {
	return input.map( ( value: number ) => {
		if ( value % 3 + value % 5 === 0 ) {
			return "FizzBuzz";
		}

		if ( value % 3 === 0 ) {
			return "Fizz";
		}

		if ( value % 5 === 0 ) {
			return "Buzz";
		}

		return value;
	} );
}
