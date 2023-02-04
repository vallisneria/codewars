function determinant(m) {
    if (m.length === 1) {
        // is 1x1 matrix
        return m[0][0];
    } else if (m.length === 2) {
        // is 2x2 matrix
        return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]);
    } else {
        let result = 0;

        for (let i = 0; i < m.length; i++) {
            let minor_matrix = m.slice(1).map(arr => arr.filter((num, idx) => idx !== i));
            result += (i % 2 === 0 ? 1 : -1) * m[0][i] * determinant(minor_matrix);
        }

        return result;
    }
}