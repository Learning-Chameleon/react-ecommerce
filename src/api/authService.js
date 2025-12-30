const authService = {
  login: async (credentials) => {
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },
  logout: async () => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });
    return response.json();
  },
};

export default authService;
