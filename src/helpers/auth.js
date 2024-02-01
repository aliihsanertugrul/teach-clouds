import { config } from "./config";
import { auth } from "@/auth";

// bu server dan session'a ulasmamizi saglar
export const getAuthHeader = async () => {
    const session = await auth();
    const token = session?.accessToken;

    let authHeader = { "Content-Type": "application/json" };
    if (token) {
        authHeader = { Authorization: `Bearer ${token}`, ...authHeader };
    }
    return authHeader;
};

export const isUserAuthorized = (role, url) => {
    const menu = config.userRightsOnRoutes.find((item) =>
        item.urlRegex.test(url)
    );
    if (!menu) return false;

    return menu.rights.includes(role);
};