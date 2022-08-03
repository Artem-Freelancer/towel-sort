function sorting(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}

module.exports = function towelSort (matrix) {
	if(matrix === undefined) {
		return []
	} else {
		if (matrix.length > 0) {
			let result = [];
			matrix.forEach( (element, index) => {
				if(index % 2 == 0) {
					element.forEach ( (element) => {
						result.push(element);
					})
				} else {
					element.sort(sorting);
					element.forEach ( (element) => {
						result.push(element);
					})
				}
			});
			return result;
		} else {
			return [];
		}
	}
}


