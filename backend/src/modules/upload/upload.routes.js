import { Router } from 'express'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { randomUUID } from 'crypto'

const router = Router()

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
})


router.post('/presigned-url', async (req, res) => {
  try {
    const { fileType } = req.body // ej: "image/jpeg"

    if (!fileType || !fileType.startsWith('image/')) {
      return res.status(400).json({ error: 'Tipo de archivo inválido' })
    }

    const key = `artist-profiles/${randomUUID()}`

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: key,
      ContentType: fileType,
    })

    const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 300 })

    res.json({
      presignedUrl,
      publicUrl: `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
    })
  } catch (error) {
    console.error('Error generando presigned URL:', error)
    res.status(500).json({ error: 'Error al generar URL de subida' })
  }
})

export { router as uploadRouter }