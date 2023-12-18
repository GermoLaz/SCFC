import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  selectedFile: File | null = null;

  onFileDropped(event: DragEvent) {
    event.preventDefault();
    if(event.dataTransfer){
      this.extractFile(event.dataTransfer.files);
    }
  }

  onFileSelected(event: any) {
    const inputElement = event.target as HTMLInputElement;
    this.extractFile(inputElement.files);
  }

  extractFile(files: FileList | null) {
    if (files && files.length > 0) {
      // Permitir solo un archivo, si necesitas más, ajusta según tus necesidades
      const file = files[0];
      if (this.isValidFile(file)) {
        this.selectedFile = file;
      } else {
        console.error('Tipo de archivo no válido.');
      }
    }
  }

  isValidFile(file: File): boolean {
    // Implementa tu lógica de validación de archivos aquí
    // En este ejemplo, se aceptan archivos de imagen, PDF y documentos de Word
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return allowedTypes.includes(file.type);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}
