var printHTML = '<div body-classes="" id=\'printPage\' class="doc-print"  document-methodes="" >'+
  '<div id="note_container">'+
    '<div ng-repeat="note in notes" id="{{note.id}}">'+
      '<table class="zoneID" ng-style="{ position:\'absolute\', left: ( note.x + \'px\' ), top: ( note.y + \'px\' ) }">'+
        '<tr>'+
          '<td width="23" class="delete_note" ng-click="removeNote(note)">&nbsp;</td>'+
          '<td ng-click="open_note($event)" regle-style="note.styleNote" contenteditable="true" class="annotation_area opened">'+
          '</td>'+
          '<td class="collapse_btn"><button contenteditable="false" class="collapse_note" ng-click="collapse($event)"></button></td>'+
          '<td id="noteID" class="drag_note">&nbsp;</td>'+
        '</tr>'+
      '</table>'+
      '<div class="has_note" id="linkID" ng-style="{ position:\'absolute\', left: ( (note.xLink) + \'px\' ), top: ( note.yLink + \'px\' ) }">'+
      '</div>'+
    '</div>' +      
  '</div>'+
  '<div id="noteBlock1" style="position:absolute;"></div>'+
	'<div ng-repeat="blocks in blocksPlan" id="noteBlock2" ng-click="addNoteOnClick($event)" on-finish-render>'+
        '<div ng-switch on="$index">'+
            '<div id="plan" ng-switch-when="0">'+
              '<h2 ng-show="showPlan">Plan</h2>'+
              '<ul class="plan">'+
                  '<li ng-repeat="plan in plans">'+
                    '<a class="level" ng-click="setActive(plan.position, plan.block)" regle-style="plan.style" style="display:block; margin-left: {{calculateNiveauPlan(plan.numNiveau)}}px;" href title="{{plan.libelle}}"> {{plan.libelle}} </a>'+
                  '</li>'+
              '</ul>'+
            '</div>'+
            '<div id="noPlanPrint{{$index}}" ng-switch-default style="padding:80px 30px 80px 17px;">'+
              '<div ng-repeat="slide in blocks" ng-show="slide.leaf || slide.root">'+
                '<div id="{{slide.id}}">'+
                  '<img class="image_type" ng-show="(slide.leaf && !slide.text) || (slide.root && slide.children.length<=0 && !slide.text)" ng-src="{{slide.originalSource || slide.source}}">'+
                  '<p data-id="{{slide.id}}" regle-style="slide.text" style="width:650px; text-align:left; margin:0; padding: 20px 0 30px 0;"></p>'+
                '</div>'+
              '</div>'+    
            '</div>'+
        '</div>'+
  '</div>'+
'</div>';
