const packageList = [];

module.exports = {
    packageList: packageList
  };


// //Function to add Package to package list
// function addPackage(packageName, packageVersion, packageRating) {
//     const existingPackage = packageList.find(p => p.name === packageName && p.version === packageVersion);

//     if (existingPackage) {
//         return { status: 409, error: 'Package exists already.' };
//     }

//     if (packageRating === 'disqualified') {
//         return { status: 424, error: 'Package is not uploaded due to the disqualified rating.' };
//     }

//     const decoded = jwt.verify(xAuthorization, 'secret');

//     if (!decoded) {
//         return { status: 403, error: 'Authentication failed (e.g. AuthenticationToken invalid or does not exist).' };
//     }

//     if (!packageName || !packageVersion) {
//         return { status: 400, error: 'There is missing field(s) in the PackageData/AuthenticationToken or it is formed improperly.' };
//     }

//     packageList.push({ name: packageName, version: packageVersion, rating: packageRating });
//     return { status: 200, message: 'Package added successfully.' };
// }