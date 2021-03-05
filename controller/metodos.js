'use strict'

//var metodo = require('.')

function accion (req,res){
	//se asigna los valores recibidos	
	const Board = req.body.board;
	const Word = req.body.word;
	const cadenaWord = new String(Word);

	const m = Board[0].length;
	const n = cadenaWord.length;
	console.log("m: " + m + " n: "  + n);
	
	var itmp = 0;
	var jtmp = 0;
	var posWord = 0;
	//falta almacenar las posiciones guardadas para q no pase nuevamente

	for(posWord ; posWord < n ; posWord ++)
	{
		for(var i = itmp; i < Board.length ; i++)
		{
			for(var j = jtmp; j < Board[i].length ; j++ )
			{
				if(Board[i][j] == cadenaWord[posWord])
				{
					console.log("Encontrada en la posicion " + i + "," + j);
					posWord++;

					if(itmp>0)
						itmp--;
					if(jtmp>0)
						jtmp--;
					//falta validar el proceso para que no se repitan las letras
				}		
			}
			//console.log(Board[i].length);
		}
	}
	return res.status(200).send({respuesta:"Encontrado"})
	//console.log("Matriz: " + Board);
	//console.log("Letra 1 de word : " + cadenaWord[1]);
}

module.exports ={
	accion
};

