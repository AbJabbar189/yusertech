import { describe, it, expect } from 'vitest';
import { siteConfig } from '../config/siteConfig';

describe('Centralized siteConfig Verification', () => {
  it('has exact brand name FAYJEXTECH and correct tagline', () => {
    expect(siteConfig.brand.name).toBe('FAYJEXTECH');
    expect(siteConfig.brand.tagline).toBe('Your Ideas. Our Technology.');
  });

  it('contains company founders Fayyaz Khan and Abdul Jabbar with photos and emails', () => {
    expect(siteConfig.founders[0].name).toBe('Fayyaz Khan');
    expect(siteConfig.founders[0].role).toContain('Founder');
    expect(siteConfig.founders[0].email).toBe('Fyyz2238@gmail.com');
    expect(siteConfig.founders[0].image).toContain('fayyaz_khan.jpg');

    expect(siteConfig.founders[1].name).toBe('Abdul Jabbar');
    expect(siteConfig.founders[1].role).toContain('Co-Founder');
    expect(siteConfig.founders[1].email).toBe('abduljabbarlala189@gmail.com');
    expect(siteConfig.founders[1].image).toContain('abdul_jabbar.jpg');
  });

  it('verifies company single phone number 0348 9133738, Orangi Town location, and working hours', () => {
    expect(siteConfig.contact.phone).toBe('0348 9133738');
    expect(siteConfig.contact.whatsapp).toBe('923489133738');
    expect(siteConfig.contact.address).toContain('Orangi Town, Karachi');
    expect(siteConfig.contact.officeHours).toContain('9:00 AM – 5:00 PM');
    expect(siteConfig.contact.offDays).toContain('Friday & Sunday');
  });

  it('contains the consolidated business services', () => {
    expect(siteConfig.services.length).toBe(5);
    const serviceIds = siteConfig.services.map((s) => s.id);
    expect(serviceIds).toContain('custom-pos-systems');
    expect(serviceIds).toContain('management-systems');
    expect(serviceIds).toContain('workflow-automation');
    expect(serviceIds).toContain('website-development');
    expect(serviceIds).toContain('maintenance-and-support');

    siteConfig.services.forEach((s) => {
      expect(s.problemSolved).toBeTruthy();
      expect(s.targetAudience).toBeTruthy();
      expect(s.benefits.length).toBeGreaterThan(0);
      expect(s.deliverables.length).toBeGreaterThan(0);
      expect(s.nextStep).toBeTruthy();
    });
  });

  it('contains the software products with valid offline specs', () => {
    expect(siteConfig.products.length).toBe(3);
    siteConfig.products.forEach((p) => {
      expect(p.slug).toBeTruthy();
      expect(p.specs.platform).toBeTruthy();
      expect(p.specs.offlineSupport).toBeTruthy();
    });
  });
});
