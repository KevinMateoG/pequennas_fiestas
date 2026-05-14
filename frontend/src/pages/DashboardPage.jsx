import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
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

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (user.role === 'artista') {
    return <DashboardArtist/>
  }
  
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fbf8ff] px-4 pt-28 pb-16 text-[#2e3145]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#DBE1FF]/70 blur-3xl" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[32rem] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="overflow-hidden border-white/60 bg-white/80 shadow-2xl shadow-slate-900/5 backdrop-blur-xl">
          <div className="h-2 bg-linear-to-r from-primary via-[#8e9bff] to-amber-300" />
          <CardHeader className="space-y-4 px-8 pt-8 pb-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-secondary/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Panel personal
            </div>
            <div className="space-y-3">
              <CardTitle className="max-w-2xl text-4xl font-semibold tracking-tight text-[#1f2233] md:text-5xl">
                Tu espacio de gestión, más limpio y más claro.
              </CardTitle>
              <CardDescription className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                Revisa tu información principal y actualiza tu perfil desde un lugar central, con el mismo estilo visual del resto de la plataforma.
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
              <div className="flex justify-center md:justify-start">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || 'Perfil'}
                    className="h-28 w-28 rounded-[2rem] object-cover shadow-xl ring-4 ring-white"
                  />
                ) : (
                  <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-primary text-3xl font-semibold text-primary-foreground shadow-xl ring-4 ring-white">
                    {(user.name || 'U').charAt(0).toUpperCase()}
                  </div>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-outline-variant/10 bg-[#f9f7ff] p-5 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Sesión activa
                  </p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-[#1f2233]">
                    {user.name || 'Usuario'}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{user.email}</p>
                </div>

                <div className="rounded-2xl border border-outline-variant/10 bg-white p-5 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Rol
                  </p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-[#1f2233]">
                    {user.role || 'Sin definir'}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Mantén tus datos actualizados para que el perfil luzca profesional.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/60 bg-slate-950 text-white shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
          <CardHeader className="px-8 pt-8 pb-4">
            <CardTitle className="text-2xl font-semibold tracking-tight text-white">
              Actualiza tu perfil
            </CardTitle>
            <CardDescription className="text-slate-300">
              Ajusta tu información pública desde el formulario de perfil de artista.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 px-8 pb-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20">
                  <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    edit
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">Una sola acción</p>
                  <p className="mt-2 text-base leading-relaxed text-slate-100">
                    Entra al flujo de edición y completa los datos que hacen que tu perfil se vea más sólido y profesional.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="h-auto w-full rounded-2xl bg-amber-400 px-6 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-amber-400/20 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-amber-300">
              <Link to="/onboarding/artista">Editar perfil</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}