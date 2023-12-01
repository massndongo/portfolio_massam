import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

  downloadPdf(): void {
    const pdfUrl = 'assets/cv.pdf'; // Mettez le chemin correct vers votre fichier PDF
    const pdfName = 'cv-massam.pdf';

    // Créez un élément <a> invisible pour déclencher le téléchargement du PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
