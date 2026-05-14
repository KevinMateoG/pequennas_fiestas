import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/context/AuthContext'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export default function BookingForm({ artist }) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' })
	const { user } = useAuth()

	const form = useForm({
		defaultValues: {
			eventDate: '',
			eventLocation: '',
			description: '',
			agreedPrice: artist?.hourlyRate || '',
		},
	})

	const onSubmit = async (data) => {
		if (!user?.id) {
			setSubmitMessage({ type: 'error', text: 'Debes estar autenticado para hacer una reserva.' })
			return
		}

		setIsSubmitting(true)
		setSubmitMessage({ type: '', text: '' })

		try {
			const response = await fetch(`${API_BASE_URL}/api/bookings`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
				body: JSON.stringify({
					artistId: artist.id,
					clientId: user.id,
					eventDate: new Date(data.eventDate).toISOString(),
					eventLocation: data.eventLocation,
					description: data.description,
					agreedPrice: parseFloat(data.agreedPrice),
				}),
			})

			const payload = await response.json()

			if (!response.ok) {
				throw new Error(payload.message || 'Error al crear la reserva.')
			}

			setSubmitMessage({ type: 'success', text: 'Reserva creada exitosamente.' })
			form.reset()
		} catch (error) {
			setSubmitMessage({ type: 'error', text: error.message })
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
			<h2 className="text-xl font-bold tracking-tight text-zinc-900">Crear Reserva</h2>
			<p className="mt-1 text-sm text-zinc-500">
				Completa los detalles de tu evento para reservar a {artist.name}
			</p>

			<div className="mt-6 space-y-6">
				{/* Event Date */}
				<div className="grid gap-2">
					<Label htmlFor="eventDate" className="text-sm font-semibold text-zinc-900">
						Fecha del Evento
					</Label>
					<Input
						id="eventDate"
						type="datetime-local"
						{...form.register('eventDate', {
							required: 'La fecha del evento es requerida',
						})}
						className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm placeholder-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
					/>
					{form.formState.errors.eventDate && (
						<p className="text-xs text-red-600">{form.formState.errors.eventDate.message}</p>
					)}
				</div>

				{/* Event Location */}
				<div className="grid gap-2">
					<Label htmlFor="eventLocation" className="text-sm font-semibold text-zinc-900">
						Ubicación del Evento
					</Label>
					<Input
						id="eventLocation"
						placeholder="Ej: Calle Principal 123, Ciudad"
						{...form.register('eventLocation', {
							required: 'La ubicación es requerida',
						})}
						className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm placeholder-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
					/>
					{form.formState.errors.eventLocation && (
						<p className="text-xs text-red-600">{form.formState.errors.eventLocation.message}</p>
					)}
				</div>

				{/* Description */}
				<div className="grid gap-2">
					<Label htmlFor="description" className="text-sm font-semibold text-zinc-900">
						Descripción del Evento
					</Label>
					<textarea
						id="description"
						placeholder="Describe tu evento, tema, duración aproximada, etc."
						{...form.register('description')}
						rows={4}
						className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm placeholder-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
					/>
					{form.formState.errors.description && (
						<p className="text-xs text-red-600">{form.formState.errors.description.message}</p>
					)}
				</div>

				{/* Agreed Price */}
				<div className="grid gap-2">
					<Label htmlFor="agreedPrice" className="text-sm font-semibold text-zinc-900">
						Precio Acordado
					</Label>
					<div className="flex items-center gap-2">
						<span className="text-sm font-semibold text-zinc-500">$</span>
						<Input
							id="agreedPrice"
							type="number"
							step="0.01"
							placeholder={artist?.hourlyRate || '0.00'}
							{...form.register('agreedPrice', {
								required: 'El precio es requerido',
								min: { value: 0, message: 'El precio debe ser mayor a 0' },
							})}
							className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm placeholder-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
						/>
					</div>
					<p className="text-xs text-zinc-500">Tarifa base: ${artist?.hourlyRate || '0.00'} / hora</p>
					{form.formState.errors.agreedPrice && (
						<p className="text-xs text-red-600">{form.formState.errors.agreedPrice.message}</p>
					)}
				</div>
			</div>

			{/* Submit Messages */}
			{submitMessage.text && (
				<div
					className={`mt-6 rounded-lg px-4 py-3 text-sm ${
						submitMessage.type === 'success'
							? 'border border-green-200 bg-green-50 text-green-800'
							: 'border border-red-200 bg-red-50 text-red-800'
					}`}
				>
					{submitMessage.text}
				</div>
			)}

			{/* Submit Button */}
			<div className="mt-6 flex justify-end gap-3">
				<Button
					type="button"
					variant="outline"
					onClick={() => form.reset()}
					className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
				>
					Cancelar
				</Button>
				<Button
					type="submit"
					disabled={isSubmitting}
					className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
				>
					{isSubmitting ? 'Reservando...' : 'Crear Reserva'}
				</Button>
			</div>
		</form>
	)
}
