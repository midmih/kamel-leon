var userAccountHTML = '<h1 id=\'titreCompte\' class=\'animated fadeInLeft\' translate>MonCompte</h1>'+
'<!-- Header -->'+
'<!-- End Header -->'+
'<div class="container">'+
'<div class="compte_details">'+
  '<div data-ng-init="initial()" document-methodes="" body-classes="" class="doc-General">'+
    '<h2>'+
      '<span>{{compte.prenom}} {{compte.nom}} </span><br /><span class="blue-subtitle">Bienvenue sur votre compte</span>'+
    '</h2>'+
    '<div>'+
      '<div id="addForm" name="addForm">'+
        '<div id="succes" class="alert alert-success" style="display:none" >Compte modifié avec succès !</div>'+
        '<form name="testForm" id="testForm" class="form_container">'+
          '<fieldset class="globalFieldStyle">'+
            '<div data-ng-show="affichage" class="alert alert-danger">'+
             '<ul data-ng-repeat="error in addErrorField">'+
                '<li>{{error}}</li>'+
             '</ul>'+
            '</div>'+
            '<p class="control_group">'+
              '<label for="prenom" id="label_fname_etap-one"><span>Prénom  </span></label>'+
              '<input type="text" class="" name="prenom" placeholder="Prénom" data-ng-model="compte.prenom" required>'+
            '</p>'+
            '<p class="control_group">'+
              '<label for="nom" id="label_name_etap-one"><span>Nom  </span></label>'+
              '<input type="text" class="" name="nom" placeholder="Nom" data-ng-model="compte.nom" required>'+
            '</p>'+
            '<p class="control_group">'+
              '<label for="email" id="label_email_etap-one"><span>Email</span></label>'+
              '<input type="text" class="" placeholder="Email" name="email" data-ng-model="compte.email" required disabled>'+
            '</p>'+
            '<a href="" class="green_link" data-toggle="modal" data-target="#confirmation_pw" title="{{\'Changer le mot de passe\' | translate}}" >Changer le mot de passe</a>'+
          '</fieldset>'+
          '<p class="centering">'+
            '<button type="button" class="btn_simple light_blue data-ng-scope" data-ng-click="modifierCompte()" title="{{\'Enregistrer\' | translate}}">Enregistrer</button>'+
          '</p>'+
        '</form>'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div class="modal fade bs-example-modal-lg in" id="confirmation_pw" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static" data-keyboard="false" >'+
    '<div class="modal-dialog modal-lg">'+
      '<div class="modal-content">'+
        '<div class="modal-header">'+
          '<button type="button" data-ng-click="cancelModification()" class="close" data-ng-click="" data-dismiss="modal" aria-hidden="true">&times;</button>'+
          '<h3 class="modal-title light_bluehead">Changer le mot de passe</h3>'+
        '</div>'+
        '<div class="modal-body adjust-modal-body">'+
           '<div id="errorPassword" class="alert alert-danger" style="display:none" >Ancien mot de passe erroné</div>'+
        '<div id="erreur" class="alert alert-danger" style="display:none" >Ces mots de passe ne correspondent pas.</div>'+
        '<div id="erreurPattern" class="alert alert-danger" style="display:none" >Le nouveau mot de passe doit contenir de 6 à 20 caractères</div>'+
          '<div class="">'+
            '<div class="tab-content">'+
              '<div class="tab-pane active" data-ng-form="AjoutformValidation" >'+
                '<form name="passwordForm" id="passwordForm" class="form_container">'+
                  '<fieldset class="globalFieldStyle">'+
                    '<div data-ng-show="modifierPasswordDisplay" class="alert alert-danger">'+
                       '<ul data-ng-repeat="error in passwordErrorField">'+
                          '<li>{{error}}</li>'+
                       '</ul>'+
                      '</div>'+
                    '<p class="control_group">'+
                      '<label for="oldpassword" class="label_keys-icn">Ancien mot de passe</label>'+
                      '<input type="password" name="oldPassword" class="" placeholder="Ancien mot de passe" data-ng-model="compte.oldPassword" required>'+
                    '</p>'+
                    '<p class="control_group">'+
                      '<label for="newPassword" class="label_keys-icn">Nouveau mot de passe</label>'+
                      '<input type="password" name="newPassword" class="" placeholder="Nouveau mot de passe" data-ng-model="compte.newPassword" required>'+
                    '</p>'+
                    '<p class="control_group">'+
                      '<label for="reNewPassword" class="label_keys-icn">Resaisir le nouveau mot de passe</label>'+
                      '<input type="password" name="reNewPassword" class="" placeholder="Resaisir le nouveau mot de passe" data-ng-model="compte.reNewPassword" required>'+
                    '</p>'+
                  '</fieldset>'+
                  '<p class="centering">'+
                    '<button data-dismiss="modal" data-ng-click="cancelModification()" class="reset_btn" type="button" title="Annuler">Annuler</button>'+
                    '<button type="button" class="btn_simple light_blue" data-ng-click="modifierPassword()" title="Modifier">Modifier</button>'+
                  '</p>'+
                '</form>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<!-- /.modal-content -->'+
      '</div>'+
      '<!-- /.modal-dialog -->'+
    '</div><!-- /.modal -->'+
  '</div>'+
'</div>'+
'</div>';