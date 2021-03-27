export const parseUsername = (user) => {
  let first_name = "",
    last_name = "",
    username = "";

  if (user?.first_name && typeof user?.first_name == "string") {
    first_name = user?.first_name;
  }

  if (user?.last_name && typeof user?.last_name == "string") {
    if (user?.last_name?.length > 8) {
      last_name = `${user.last_name[0]}.`;
    } else {
      last_name = user.last_name.trim();
    }
  }

  if (user?.username && typeof user?.username == "string") {
    username = user.username;
    if (first_name || last_name) {
      return `${first_name} ${last_name} (${username})`.trim();
    } else {
      return `${username}`;
    }
  } else {
    return `${first_name} ${last_name}`.trim();
  }
};
