import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/shared/schema";

export default function Profile() {
    const { user: currentUser, isLoading: authLoading, isAuthenticated } = useAuth();

    const { data: user, isLoading: profileLoading } = useQuery<User>({
        queryKey: ['/api/profile/me'],
        queryFn: async () => {
            const res = await fetch(`/api/profile/me`);
            if (!res.ok) return null;
            return await res.json();
        },
    });

    const isLoading = authLoading || profileLoading;

    if (isLoading) return <p>Loading</p>;
    if (!isAuthenticated) return <p>Sign in required</p>;
    if (!user) return <p>User Not Found</p>;

    return (
        <>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center"> {user?.id} {user?.email}
                    </div>
                </div>
            </section>
        </>
    );
}
