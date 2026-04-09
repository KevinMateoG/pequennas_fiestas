export function OnboardingPage(){
    const user = JSON.parse(sessionStorage.getItem('user'))

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <ArtistProfileForm
                userId={user.id}
            onSuccess={() => {
                sessionStorage.removeItem('pending_user')
                window.location.href = '/'}}/>
    </div>
    )
}