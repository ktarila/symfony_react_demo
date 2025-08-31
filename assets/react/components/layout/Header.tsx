import { useAuth } from "@/hooks/useAuth";
import { User } from "@/shared/schema";

export default function Header() {
    const { user, isAuthenticated, isLoading } = useAuth() as {
        user: User | undefined,
        isAuthenticated: boolean,
        isLoading: boolean
    };


    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex items-center space-x-4">
                {isLoading ? (
                    <div className="h-9 w-9 rounded-full bg-muted animate-pulse"></div>
                ) : isAuthenticated ? (
                    <>
                        <a href="/profile/">
                            My Profile
                        </a>

                        <a href="/twig/logout">
                            Sign out
                        </a>
                    </>
                ) : (
                    <a href="/twig/login">Sign In</a>
                )}
            </div>
        </div>
    );
}
