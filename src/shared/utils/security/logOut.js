export const logout = () => {
    localStorage.removeItem("token");
    return false;
}