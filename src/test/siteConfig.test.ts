import { describe, it, expect } from 'vitest';
import { siteConfig } from '../config/siteConfig';

describe('Centralized siteConfig Verification', () => {
  it('has exact brand name YUSERTECH and correct tagline', () => {
    expect(siteConfig.brand.name).toBe('YUSERTECH');
    expect(siteConfig.brand.tagline).toBe('Technology That Works for Your Business.');
  });

  it('contains company founders Fayyaz Khan and Abdul Jabbar with real numbers', () => {
    expect(siteConfig.founders[0].name).toBe('Fayyaz Khan');
    expect(siteConfig.founders[0].role).toBe('Founder');
    expect(siteConfig.founders[0].phone).toBe('0342 2643761');

    expect(siteConfig.founders[1].name).toBe('Abdul Jabbar');
    expect(siteConfig.founders[1].role).toBe('Co-Founder');
    expect(siteConfig.founders[1].phone).toBe('0346 7366879');
  });

  it('verifies Orangi Town, Karachi location and working hours (Fri & Sun Off)', () => {
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
