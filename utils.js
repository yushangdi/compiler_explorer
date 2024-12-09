function getTransformedMapping(mapping) {
    const transformedObject = {};
    // Iterate over the original object and reverse the key-value relationship
    for (let [key, values] of Object.entries(mapping)) {
        values.forEach(value => {
            if (transformedObject[value]) {
                transformedObject[value].push(key)
            } else {
                transformedObject[value] = [key]
            }
        });
    }
    return transformedObject
}
