<?php


/* ----------------- DESCRIÇÃO DO TESTE -----------------------*/

/**
 * Implemente uma função que ao receber um array associativo contendo arquivos e donos, retorne os arquivos agrupados por dono.  
 * 
 * Por exempolo, um array ["Input.txt" => "Jose", "Code.py" => "Joao", "Output.txt" => "Jose"] 
 * a função groupByOwners deveria retornar ["Jose" => ["Input.txt", "Output.txt"], "Joao" => ["Code.py"]].
 * 
 */


class FileOwners
{
    public static function groupByOwners($files)
    {
        $docs = [];
        foreach($files as $index => $owner){
            if(!array_key_exists($owner, $docs)) {
                $docs[$owner] = [$index];    
            }
            else{   
                array_push($docs[$owner], $index); 
            }
        }
        return $docs;
    }
}

$files = array
(
    "Input.txt" => "Jose",
    "Code.py" => "Joao",
    "Output.txt" => "Jose",
    "Click.js" => "Maria",
    "Out.php" => "maria",

);

var_dump(FileOwners::groupByOwners($files));