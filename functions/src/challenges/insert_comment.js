const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { z } = require('zod');

const insertComment = functions.https.onCall(async (data) => {
    const mySchema = z.object({
        challengeId: z.string().min(1),
        email: z.string().min(1),
        nickname: z.string().min(1),
        commentText: z.string().min(1)
    })

    const InputData = mySchema.parse(data)

    admin.firestore().collection('comments').add(InputData);
})

module.exports = insertComment;