import { Router } from 'express';
import {eq , and } from 'drizzle-orm';
import { db } from '../../config/db.js'
import { bookings } from '../../schemas/app.schema.js';
import { user } from '../../schemas/schema.js';
import { auth } from '../../config/auth.js';
import { error } from 'better-auth/api';

const router = Router()

router.get('/artist', async (req,res) => {
    try{
        const session = await auth.api.getSession({headers: req.headers})
        if (!session?.user?.id) return res.status(401).json({error: "No autorizado"})
        
        const rows = await db.select({
            id: bookings.id,
            eventDate: bookings.eventDate,
            eventLocation: bookings.eventLocation,
            description: bookings.description,
            agreedPrice: bookings.agreedPrice,
            status: bookings.status,
            createdAt: bookings.createdAt,
            clientName: user.name,
            clientEmail: user.email,
            clientImage: user.image,
        }).from(bookings).leftJoin(user, eq(bookings.clientId, user.id))
        .where(eq(bookings.artistId, session.user.id)).orderBy(bookings.createdAt)

        res.json({data: rows})
    } catch (error) {
        console.log('Error listado reservas', error)
        res.status(500).json({error: 'Error al cargar las reservas'})
    }
})

router.patch('/:id/status', async (req,res) => {
    try {
        const session = await auth.api.getSession({headers: req.headers})
        if (!session?.user?.id) return res.status(401).json({ error: 'No autorizado'})
        
        const {status} = req.body
        if (!['aceptada', 'rechazada'].includes(status)) {
            return res.status(400).json({error: 'Estado invalido'})
        }
        const [updated] = await db.update(bookings).set({ status, updatedAt: new Date() })
        .where(
            and(
                eq(bookings.id, req.params.id),
                eq(bookings.artistId, session.user.id)
            )
        ).returning()
        if (!updated) return res.status(404).json({error: 'Reserva no encontrada'})
        res.json({data: updated})
    } catch (error){
        console.log('Error actualizacion reserva', error);
        res.status(500).json({error: 'Error al actualizar la reserva'})
    }
})

export { router as bookingsRouter}