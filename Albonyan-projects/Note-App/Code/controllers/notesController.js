import  { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";
import Note from "../models/Note.js";


export const createNote = async (req, res) => {
  const { note } = req.body;

  if (!note) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const notes = await Note.create(req.body);
  res.status(StatusCodes.CREATED).json({ notes });
};

export const getAllNote = async (req, res) => {
  const notes = await Note.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ notes, totalJobs: notes.length, numOfPages: 1 });
};

export const deleteNote = async (req, res) => {
  const { id: noteId } = req.params;

  const note = await Note.findOne({ _id: noteId });

  if (!note) {
    throw new NotFoundError(`No note with id :${noteId}`);
  }

  checkPermissions(req.user, note.createdBy);

  await note.deleteOne({ _id: noteId });

  res.status(StatusCodes.OK).json({ msg: "Success! Note removed" });
};


export const deleteAll = async (req, res) => {

  // checkPermissions(req.user, req.params.userId);
  
  await Note.deleteMany({});

  res.status(StatusCodes.OK).json({ msg: "Success! Note removed" });
};

export const updateNote = async (req, res) => {
  const { id: noteId } = req.params;
  const { status } = req.body;

  if (!status) {
    throw new BadRequestError("Please provide all values");
  }
  const note = await Note.findOne({ _id: noteId });

  if (!note) {
    throw new NotFoundError(`No note with id :${noteId}`);
  }
  // check permissions

  checkPermissions(req.user, note.createdBy);

  const updatednote = await Note.findOneAndUpdate({ _id: noteId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatednote });
};
