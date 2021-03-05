'use strict'

const assert = require("assert");
const request = require("supertest");
const app = require("../app");

describe("Express app", ()=>{
		it("Handle post request /api/TipoPost", done=>{
			request(app)
			.post('/api/TipoPost')
			.end((err,response)=>{
			 assert(response.body.respuesta === "Encontrado");
			done();
		}); 
	});
});

