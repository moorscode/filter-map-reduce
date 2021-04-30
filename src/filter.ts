/**
 * Filters out the number four from an array of numbers.
 *
 * @param {number[]} input The list to filter.
 *
 * @return {number[]} The filtered list.
 */
import { User } from "./types/user";

export function removeNumberFourFromArray( input: number[] ): number[] {
	return input.filter( ( item ) => item !== 4 );
}

export function removeUsersWithoutHair( input: User[] ): User[] {
	return input.filter( ( user: User ) => user.hairColor !== "none" );
}
