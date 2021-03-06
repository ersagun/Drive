<?php

/**
 * Class Client
 */

require_once('Base.php');
require_once('BaseException.php');
require_once('Compte.php');

class Client implements JsonSerializable
{

    // Fields


    /**
     * @var boolean
     */

    private $admin;

    /**
     * @var String
     */

    private $codename;

    /**
     * @var Compte
     */

    private $compte;

    /**
     * @var int
     */

    private $compte_id;

    /**
     * @var int
     */

    private $cp;

    /**
     * @var int
     */

    private $dernierpanier;

    /**
     * @var int
     */

    private $id;

    /**
     * @var String
     */

    private $mdp;

    /**
     * @var String
     */

    private $nom;

    /**
     * @var int
     */

    private $numvoie;

    /**
     * @var String
     */

    private $prenom;

    /**
     * @var String
     */

    private $rue;

    /**
     * @var String
     */

    private $ville;

    private $email;
    // Properties


    /**
     * Donne acces aux attributs.
     * @param $attr_name L'attribut recherché.
     * @throws Exception si l'attribut n'existe pas
     * dans cette classe.
     */

    public function __get($attr_name)
    {
        if (property_exists(__CLASS__, $attr_name)) {
            return $this->$attr_name;
        }

        $emess = __CLASS__ . ": unknown member $attr_name (getAttr)";
        throw new Exception($emess, 45);
    }

    /**
     * Modifies the admin attribute.
     * @param $_admin The new value of the admin of this Client.
     */

    public function setAdmin($_admin)
    {
        $this->admin = $_admin;
    }

    /**
     * Modifies the codename attribute.
     * @param $_codename The new value of the codename of this Client.
     */

    public function setCodename($_codename)
    {
        $this->codename = $_codename;
    }

    /**
     * Modifies the compte_id attribute.
     * @param $_compte_id The new value of the compte_id of this Client.
     */

    public function setCompte_id($_compteid)
    {
        $this->compte_id = $_compteid;
    }

    /**
     * Modifies the cp attribute.
     * @param $_cp The new value of the cp of this Client.
     */

    public function setCp($_cp)
    {
        $this->cp = $_cp;
    }

    /**
     * Modifies the dernierpanier attribute.
     * @param $_dernierpanier The new value of the dernierpanier of this Client.
     */

    public function setDernierPanier($_dernierpanier)
    {
        $this->dernierpanier = $_dernierpanier;
    }

    /**
     * Modifies the id attribute.
     * @param $_id The new value of the id of this Client.
     */

    public function setId($_id)
    {
        $this->id = $_id;
    }

    /**
     * Modifies the mdp attribute.
     * @param $_mdp The new value of the mdp of this Client.
     */

    public function setMdp($_mdp)
    {
        $this->mdp = $_mdp;
    }

    /**
     * Modifies the nom attribute.
     * @param $_nom The new value of the nom of this Client.
     */

    public function setNom($_nom)
    {
        $this->nom = $_nom;
    }
    /**
     * Modifies the numvoie attribute.
     * @param $_numvoie The new value of the numvoie of this Client.
     */

    public function setNumvoie($_numvoie)
    {
        $this->numvoie = $_numvoie;
    }

    /**
     * Modifies the prenom attribute.
     * @param $_prenom The new value of the prenom of this Client.
     */

    public function setPrenom($_prenom)
    {
        $this->prenom = $_prenom;
    }

    /**
     * Modifies the rue attribute.
     * @param $_rue The new value of the rue of this Client.
     */

    public function setRue($_rue)
    {
        $this->rue = $_rue;
    }
    
        public function setEmail($_e)
    {
        $this->email = $_e;
    }


    /**
     * Modifies the ville attribute.
     * @param $_ville The new value of the ville of this Client.
     */

    public function setVille($_ville)
    {
        $this->ville = $_ville;
    }


    // Constructor


    /**
     * Crée une nouvelle instance de la classe Client.
     */

    public function __construct()
    {

    }
    

    // Methods


    /**
     * Insere le Client dans la base de données.
     * @throws Exception Si tous les champs obligatoire de cette
     * classe n'ont pas étés remplis.
     * @return l'ID recupéré par le Client inséré.
     */

    public function insert()
    {
        try {
            // Connection a la base.

            $bdd = Base::getConnection();

            if (!isset($this->nom)) {
                /**throw new Exception("Le Client n'a pas pu être inseré
                 dans la base de données car le champ nom n'a pas été specifié
                  et il s'agit d'un champ obligatoire.");**/
            } else if (!isset($this->prenom)) {
                throw new Exception("Le Client n'a pas pu être inseré
                 dans la base de données car le champ prenom n'a pas été specifié
                  et il s'agit d'un champ obligatoire.");
            } else if (!isset($this->numvoie)) {
                throw new Exception("Le Client n'a pas pu être inseré
                 dans la base de données car le champ numvoie n'a pas été specifié
                  et il s'agit d'un champ obligatoire.");
            } else if (!isset($this->rue)) {
                throw new Exception("Le Client n'a pas pu être inseré
                 dans la base de données car le champ rue n'a pas été specifié
                  et il s'agit d'un champ obligatoire.");
            } else if (!isset($this->cp)) {
                throw new Exception("Le Client n'a pas pu être inseré
                 dans la base de données car le champ cp n'a pas été specifié
                  et il s'agit d'un champ obligatoire.");
            } else if (!isset($this->ville)) {
                throw new Exception("Le Client n'a pas pu être inseré
                 dans la base de données car le champ ville n'a pas été specifié
                  et il s'agit d'un champ obligatoire.");
            } /**else if (!isset($this->dernierpanier)) {
                throw new Exception("Le Client n'a pas pu être inseré
                 dans la base de données car le champ dernierpanier n'a pas été specifié
                  et il s'agit d'un champ obligatoire.");
            } **/else if (!isset($this->admin)) {
                throw new Exception("Le Client n'a pas pu être inseré
                 dans la base de données car le champ admin n'a pas été specifié
                  et il s'agit d'un champ obligatoire.");
            } else if (!isset($this->codename)) {
                throw new Exception("Le Client n'a pas pu être inseré
                 dans la base de données car le champ codename n'a pas été specifié
                  et il s'agit d'un champ obligatoire.");
            } else if (!isset($this->email)) {
                throw new Exception("Le Client n'a pas pu être inseré
                 dans la base de données car le champ email n'a pas été specifié
                  et il s'agit d'un champ obligatoire.");
            }

            // On prépare la requête

             $requete = $bdd->prepare("INSERT INTO client(Client_Nom, Client_Prenom, Client_Numvoie, Client_Rue,
              Client_Cp, Client_Ville, Client_Admin, Client_Codename, Client_email)
              VALUES (:nom, :pnom, :voie, :rue, :cp, :vil, :adm, :cdn, :email);");
            $admin = 1;

            if ($this->admin==true)
                $admin = 0;

            $bol=$requete->execute(array
            (
                'nom' => $this->nom,
                'pnom' => $this->prenom,
                'voie' => $this->numvoie,
                'rue' => $this->rue,
                'cp' => $this->cp,
                'vil' => $this->ville,
                'adm' => $admin,
                'cdn' => $this->codename,
                'email'=>$this->email,
            ));
            if(!$bol){
                throw new Exception("Le Client n'a pas pu ête inséré");
            }

            // On récupere l'identifiant du Client inséré.

            $this->id = $bdd->LastInsertID('client');
            $requete->closeCursor();
            return $this->id;
        } catch (BaseException $e) {
            print $e->getMessage();
        }
    }

    public static function getMailbyId($id){
         try
        {
            // Connection a la base.

            $bdd = Base::getConnection();

            // On prépare la requete pour compter le nombre de nom équivalent
            // au parametre

            $reponse = $bdd -> prepare("SELECT Client.Client_email FROM Client inner join Compte on Client.Compte_Id=Compte.Compte_Id WHERE
                Client.Client_Id=:idd");

            $reponse -> execute(array(
                'idd'=>$id
            ));

            // On récupere le résulat

            $result = $reponse -> fetch();
            $reponse -> closeCursor();

            // Si le compte est 1, le nom est unique, on retourne vrai.

            return ($result["Client_email"]);
        }
        catch(BaseException $e)
        {
            print $e -> getMessage();
        }
    }
    
    
    /**
     * Permet de retrouver un Client dans la base de données
     * a l'aide de son identifiant.
     * @param $id Le Client avec l'identifiant recherché, null sinon.
     */

    public static function findByID($id)
    {
        try {
            // Connection a la base.

            $bdd = Base::getConnection();

            // On prépare la récupération du Client avec l'ID spécifié.

            $requete = $bdd->prepare("SELECT Client_Id, Client_Nom, Client_Prenom, Client_Numvoie, Client_rue,
            Client_cp, Client_ville, Client_dernierpanier, Client_Admin, Client_codename, Client_mdp, Client.Compte_Id
            AS cmp_id, Compte_Codename, Compte_mdp FROM Client INNER JOIN Compte ON Compte.Compte_Id =
            Client.Compte_Id WHERE Client_Id = ?");
            $requete->execute(array($id));

            /**
             * Décommenter ici et commenter la suite si vous voulez retourner
             * l'objet en format JSON.
             * return json_encode($requete->fetchAll(PDO::FETCH_ASSOC));
             */

            // On transforme le résultat en un objet

            $reponse = $requete->fetch(PDO::FETCH_ASSOC);

            // On transforme l'objet en un Produit

            if ($reponse) {
                $c = new Compte();

                $c->setId(intval($reponse['cmp_id']));
                $c->setMdp($reponse['Compte_mdp']);

                $cl = new Client();

                $cl->id = intval($reponse['Client_Id']);
                $cl->nom = $reponse['Client_Nom'];
                $cl->prenom = $reponse['Client_Prenom'];
                $cl->numvoie = intval($reponse['Client_Numvoie']);
                $cl->rue = $reponse['Client_rue'];
                $cl->cp = intval($reponse['Client_cp']);
                $cl->ville = $reponse['Client_ville'];
                $cl->dernierpanier = intval($reponse['Client_dernierpanier']);
                $cl->admin = (intval($reponse['Client_Admin']) == 0);
                $cl->codename = $reponse['Client_codename'];
                $cl->mdp = $reponse['Client_mdp'];
                $cl->compte = $c;
                $cl->compte_id = $cl->compte->id;

                $requete->closeCursor();
                return $cl;
            } else return null;
        } catch (BaseException $e) {
            print $e->getMessage();
        }
    }

    /**
     * Permet de retrouver un Client dans la base de données
     * a l'aide de son nom.
     * @param $id Le Client avec le nom recherché, null sinon.
     */

    public static function findByNom($nom)
    {
        try {
            // Connection a la base.

            $bdd = Base::getConnection();

            // On prépare la récupération du Client avec le nomspécifié.

            $requete = $bdd->prepare("SELECT Client_Id, Client_Nom, Client_Prenom, Client_Numvoie, Client_rue,
            Client_cp, Client_ville, Client_dernierpanier, Client_Admin, Client_codename, Client_mdp, Client.Compte_Id
            AS cmp_id, Compte_Codename, Compte_mdp FROM Client INNER JOIN Compte ON Compte.Compte_Id =
            Client.Compte_Id WHERE Client_Nom = ?");
            $requete->execute(array($nom));

            /**
             * Décommenter ici et commenter la suite si vous voulez retourner
             * l'objet en format JSON.
             * return json_encode($requete->fetchAll(PDO::FETCH_ASSOC));
             */

            // On transforme le résultat en un objet

            $reponse = $requete->fetch(PDO::FETCH_ASSOC);

            // On transforme l'objet en un Produit

            if ($requete->rowCount()>0) {
                $c = new Compte();

                $c->setId(intval($reponse['cmp_id']));
                $c->setCodename($reponse['Compte_Codename']);
                $c->setMdp($reponse['Compte_mdp']);

                $cl = new Client();

                $cl->id = intval($reponse['Client_Id']);
                $cl->nom = $reponse['Client_Nom'];
                $cl->prenom = $reponse['Client_Prenom'];
                $cl->numvoie = intval($reponse['Client_Numvoie']);
                $cl->rue = $reponse['Client_rue'];
                $cl->cp = intval($reponse['Client_cp']);
                $cl->ville = $reponse['Client_ville'];
                $cl->dernierpanier = intval($reponse['Client_dernierpanier']);
                $cl->admin = (intval($reponse['Client_Admin']) == 0);
                $cl->codename = $reponse['Client_codename'];
                $cl->mdp = $reponse['Client_mdp'];
                $cl->compte = $c;
                $cl->compte_id = $cl->compte->id;
                echo $reponse;
                $requete->closeCursor();
                return $cl;
            } else return null;
        } catch (BaseException $e) {
            print $e->getMessage();
        }
    }

     public static function findByNomRetName($nom)
    {
        try {
            // Connection a la base.

            $bdd = Base::getConnection();

            // On prépare la récupération du Client avec le nomspécifié.

            $requete = $bdd->prepare("SELECT Client_Codename FROM Client WHERE Client_Codename = ?");
            $requete->execute(array($nom));

            /**
             * Décommenter ici et commenter la suite si vous voulez retourner
             * l'objet en format JSON.
             * return json_encode($requete->fetchAll(PDO::FETCH_ASSOC));
             */

            // On transforme le résultat en un objet

            $reponse = $requete->fetch(PDO::FETCH_ASSOC);

            // On transforme l'objet en un Produit
                $a=0;
                if($reponse["Client_Codename"]===$nom){
                    $a= 1;
                }else{
                    $a= 0;
                }
                $requete->closeCursor();
            return $a;
        } catch (BaseException $e) {
            print $e->getMessage();
        }
    }

    
    /**
     * Vérifie si un Client a rentré le bon mot de passe.
     * @param $codename L'identifiant du Client.
     * @param $mdp Le mot de passe inséré par le client.
     * Retourne vrai si le mot de passe est correct, faux sinon.
     */

    public static function VerifierMdp($codename, $mdp)
    {
        try
        {
            $a=0;
            // Connection a la base.

            $bdd = Base::getConnection();

            // On prépare la requete pour compter le nombre de nom équivalent
            // au parametre

            $reponse = $bdd -> prepare("SELECT Count(*) AS copies FROM Client inner join Compte on Client.Compte_Id=Compte.Compte_Id WHERE
                Client.Client_Codename = :name AND Compte.Compte_mdp = :mdp;");

            $reponse -> execute(array(
                'name' => $codename,
                'mdp' => $mdp
            ));

            // On récupere le résulat

            $result = $reponse -> fetch();
            $reponse -> closeCursor();
            $val=intval($result['copies']);
            if( $val===1){
                $a=1;
            }else{
                $a=0;
            }

            return $a;
        }
        catch(BaseException $e)
        {
            print $e -> getMessage();
        }
    }
    
      public static function VerifierMdpId($codename, $mdp)
    {
        try
        {
            // Connection a la base.

            $bdd = Base::getConnection();

            // On prépare la requete pour compter le nombre de nom équivalent
            // au parametre

            $reponse = $bdd -> prepare("SELECT Client.Client_Dernierpanier FROM Client inner join Compte on Client.Compte_Id=Compte.Compte_Id WHERE
                Client.Client_Codename = :name AND Compte.Compte_mdp = :mdp;");

            $reponse -> execute(array(
                'name' => $codename,
                'mdp' => $mdp
            ));

            // On récupere le résulat

            $result = $reponse -> fetch();
            $reponse -> closeCursor();

            // Si le compte est 1, le nom est unique, on retourne vrai.

            return ($result["Client_Dernierpanier"]);
        }
        catch(BaseException $e)
        {
            print $e -> getMessage();
        }
    }
    
    public static function updatePanierId($client_id,$panier_id){
        try {
           
            $bdd = Base::getConnection();
            // On prépare la requête

             $requete = $bdd->prepare("Update client SET Client_Dernierpanier=:dp WHERE Client_Id= :cli_id;");

            $bol=$requete->execute(array
            (
                'dp' => $panier_id,
                'cli_id'=>$client_id
            ));
            // On récupere l'identifiant du Client inséré.

            $requete->closeCursor();
        } catch (BaseException $e) {
            print $e->getMessage();
        }
    }
        
    public static function updateCompteId($id,$co_id){
        try {
           
            $bdd = Base::getConnection();
            // On prépare la requête

             $requete = $bdd->prepare("Update client SET Compte_Id=:comp WHERE Client_Id= :cli_id;");

            $bol=$requete->execute(array
            (
                'cli_id' => $id,
                'comp'=>$co_id
            ));
            // On récupere l'identifiant du Client inséré.

            $requete->closeCursor();
        } catch (BaseException $e) {
            print $e->getMessage();
        }
    }

      public static function VerifierMdpRetId($codename, $mdp)
    {
        try
        {
            // Connection a la base.

            $bdd = Base::getConnection();

            // On prépare la requete pour compter le nombre de nom équivalent
            // au parametre

            $reponse = $bdd -> prepare("SELECT Client.Client_Id FROM Client inner join Compte on Client.Compte_Id=Compte.Compte_Id WHERE
                Client.Client_Codename = :name AND Compte.Compte_mdp = :mdp;");

            $reponse -> execute(array(
                'name' => $codename,
                'mdp' => $mdp
            ));

            // On récupere le résulat

            $result = $reponse -> fetch();
            $reponse -> closeCursor();

            // Si le compte est 1, le nom est unique, on retourne vrai.

            return ($result["Client_Id"]);
        }
        catch(BaseException $e)
        {
            print $e -> getMessage();
        }
    }
    
    // function called when encoded with json_encode
    public function jsonSerialize() {
        return get_object_vars($this);
    }
}