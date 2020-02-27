import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MainNavComponent } from './main-nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainNavComponent', () => {
  let component: MainNavComponent;
  let fixture: ComponentFixture<MainNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  describe('#onChangeScreenMode()', () => {
    it('Should change the screen mode to collapsed when it is expanded', () => {
      // Arrange
      component.isOpenSideBar = true;
      const toggleSpy = spyOn(component.drawer, 'toggle');
      // Act
      component.onChangeScreenMode();
      // Assert
      expect(component.isOpenSideBar).toBeFalsy();
      expect(toggleSpy).toHaveBeenCalled();
    });
    it('Should change the screen mode to expanded when it is collapsed', () => {
      // Arrange
      component.isOpenSideBar = false;
      const toggleSpy = spyOn(component.drawer, 'toggle');
      // Act
      component.onChangeScreenMode();
      // Assert
      expect(component.isOpenSideBar).toBeTruthy();
      expect(toggleSpy).toHaveBeenCalled();
    });
  });
});
