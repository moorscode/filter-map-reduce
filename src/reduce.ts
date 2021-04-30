export function reduceNumbersToSum( input: number[] ): number {
	return input.reduce( ( accumulator: number, value: number ) => accumulator + value, 0 );
}

export function reduceNumbersToSumWithForLoop( input: number[] ): number {
	let total = 0;

	for ( let index = 0; index < input.length; index ++ ) {
		total += input[ index ];
	}

	return total;
}

export function reduceNumbersToSumWithForEach( input: number[] ): number {
	let total = 0;

	input.forEach( ( value ) => {
		total += value;
	} );

	return total;
}
