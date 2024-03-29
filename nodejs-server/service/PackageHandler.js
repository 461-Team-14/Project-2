const packageList = [  
  {
    Version: "1.2.3",
    Name: "Underscore"
  },
  {
    Version: "1.2.3-2.1.0",
    Name: "Lodash"
  },
  {
    Version: "^1.2.3",
    Name: "React"
  },
  {
    Version: "1.2.43",
    Name: "React"
  }
];

module.exports = {
    packageList: packageList,
    deletePackages: deletePackages,
    removePackage: removePackage,
    removePackageById: removePackageById
};

//Function to delete all packages in the List
function deletePackages(userList) {
  // Delete all users from the user list
  packageList.splice(0, packageList.length);
}

//Function to remove a package from the package list
function removePackage(name) {
  let i = packageList.length;
  while (i--) {
    if (packageList[i].Name === name) {
      packageList.splice(i, 1);
    }
  }
}

function removePackageById(Id) {
  for (let i = 0; i < packageList.length; i++) {
    if (packageList[i].Id.toLowerCase() === Id.toLowerCase()) {
      packageList.splice(i, 1);
      return;
    }
  }
}