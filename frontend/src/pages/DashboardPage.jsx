import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Card, CardContent, CardHeader } from '@/components/ui'
import DashboardArtist from '@/features/artist/DashboardArtist'

export function DashboardPage() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background px-4 pt-28 pb-16">
        <div className="mx-auto flex max-w-5xl justify-center">
          <Card className="w-full max-w-2xl animate-pulse">
            <CardHeader>
              <div className="h-6 w-32 rounded bg-slate-200" />
              <div className="h-4 w-56 rounded bg-slate-100" />
            </CardHeader>
            <CardContent>
              <div className="h-24 rounded-xl bg-slate-100" />
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  // Only active artista sessions can access this route.
  if (!user || user.role !== 'artista') {
    return <Navigate to="/" replace />
  }

  return <DashboardArtist />
}