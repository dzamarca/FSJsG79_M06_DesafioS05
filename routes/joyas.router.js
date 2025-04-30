import { Router }  from "express";
import { getOrderAndLimitHateoas, joyasFilter } from "../src/controllers/joyas.controller.js";

const router = Router()

router.get('',getOrderAndLimitHateoas)
router.get('/filtros', joyasFilter)

export default router