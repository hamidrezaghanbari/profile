import { MongoClient } from "mongodb"

// /api/contact 
export default  async (req, res) => {
    if (req.method === 'POST') {
        const { email, name, message } = req.body

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            !name.trim() === '' ||
            !message ||
            !message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid inputs' })
            return
        }

        // store in db
        const newMessage = { email, name, message }
        
        let client
        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.sqyxb.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

        try {
            client = await MongoClient.connect(connectionString)
        } catch (error) {
            console.log(error, 'error for connection to database')
            return res.status(500).json({message: 'Could not connect to database'})
        }

        const db = client.db()

        try {
            const result = await db.collection('ProfileDB').insertOne(newMessage)
            newMessage.id = result.insertedId
        } catch (error) {
            client.close()
            console.log(error, 'error for create new message')
            return res.status(500).json({message: 'error for inserting new message'})
        }


        client.close()










        res.status(201).json({message: 'Successfully stored your message!'})
    }
}