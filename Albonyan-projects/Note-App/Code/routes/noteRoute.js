import express  from 'express'
const router = express.Router()


import {createNote, getAllNote, deleteAll ,deleteNote, updateNote} from '../controllers/notesController.js'


router.post('/', createNote)

router.get('/', getAllNote)


router.delete("/:id", deleteNote)
router.delete("/:userId", deleteAll)
router.patch("/:id", updateNote)

export default router
