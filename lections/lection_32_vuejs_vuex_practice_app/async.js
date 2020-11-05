function timerExample() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('timer done');
    }, 1500)
  });
}

async/await
  async function fooBar() {
    const user = await getUsers()
    if (!user) {
      return;
    }
    const userId = findUser(user)
    const userRepo = await getReposBytUserId(userId)

    return userRepo;
  }

  function some() {
    return getUsers()
      .then(user => {
        if (!user) {
          return Promise.reject();
        }

        return findUser(user);
      })
      .then(userId => getReposBytUserId(userId))
      .then(userRepo => userRepo);
  }

  fooBar();
  console.log(some());