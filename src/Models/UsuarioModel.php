<?php

namespace App\Models;
if(!isset($_SESSION))  
{ 
    session_start();
} 
use Psr\Container\ContainerInterface;
use App\Models\BaseModel;


class UsuarioModel extends BaseModel
{

    public function getData()
    {   
        $sql = "
        SELECT up.id_plan,id_rol,
        p.nombre,p.carpeta_plan,p.ruta_imagen,p.ruta_imagen_plan,p.color_plan,
        p.formato_boton1 as boton1,p.formato_boton2 as boton2, p.color_boton1,p.color_boton2 
        from usuarios AS u 
        JOIN usuario_plan as up on u.id_usuario=up.id_usuario
        JOIN plan as p on p.id_plan=up.id_plan
        WHERE u.id_usuario=?";
        $resData= $this->query($sql,array($_SESSION['id_usuario']));
        
        return $resData; 
    }
    public function getResumeUser() 
    {    
        $userResume=array(); 
        $sql = "
        SELECT CONCAT(u.primer_nombre, ' ' , u.primer_apellido) as nombre,email,direccion,id_rol
        from usuarios AS u 
        JOIN usuario_plan as up on u.id_usuario=up.id_usuario
        JOIN plan as p on p.id_plan=up.id_plan
        WHERE u.id_usuario=?";
        $resUser= $this->query($sql,array($_SESSION['id_usuario']));
       
        return $resUser[0]; 
    }
    public function getDataByPlan($plan)
    {   
        $sql = "
        SELECT u.id_usuario,u.primer_nombre,u.segundo_nombre,
        u.primer_apellido,u.segundo_apellido,up.id_plan,u.id_rol,
        p.nombre,p.carpeta_plan,p.ruta_imagen,p.ruta_imagen_plan,p.color_plan,
        p.formato_boton1 as boton1,p.formato_boton2 as boton2,'getByData' as funcion,
        p.color_boton1,p.color_boton2 
        from usuarios AS u 
        JOIN usuario_plan as up on u.id_usuario=up.id_usuario
        JOIN plan as p on p.id_plan=up.id_plan
        WHERE u.id_usuario=? and p.id_plan=?";
        $resData= $this->query($sql,array($_SESSION['id_usuario'],$plan));
        if($resData){
            return $resData[0];
        }
        else{
            return false;
        }
        return $resData[0]; 
    }
    public function getPlanByUser()
    {   
        $sql = "
        SELECT p.id_plan,p.nombre,p.carpeta_plan,p.ruta_imagen,p.color_plan,
        p.formato_boton1 as boton1,p.formato_boton2 as boton2,count(p.id_plan) as cantidad_planes
        from usuarios AS u 
        JOIN usuario_plan as up on u.id_usuario=up.id_usuario
        JOIN plan as p on p.id_plan=up.id_plan
        WHERE u.id_usuario=? ";
        $resData= $this->query($sql,array($_SESSION['id_usuario']));
        
        return $resData[0]; 
    }
    public function getAcceso(){

        $id_usuario=$_SESSION['id_usuario'];
        
        $sql = "
        SELECT max(u.ingreso) as ultimo_ingreso
        FROM login_usuario U
        WHERE U.id_usuario=?
        ";
        $res = $this->query($sql, array($id_usuario));
        return $res;

    }
    public function getDataUser(){

        $sql = "
        SELECT CONCAT(u.primer_nombre, ' ' , u.primer_apellido) as nombre,email,direccion,id_rol
        from usuarios AS u 
        WHERE u.id_usuario=?";
        $resUser= $this->query($sql,array($_SESSION['id_usuario']));
       
        return $resUser[0]; 

    }
}
