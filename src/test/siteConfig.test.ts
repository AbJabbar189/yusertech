import { describe, it, expect } from 'vitest';
import { siteConfig } from '../config/siteConfig';

describe('Centralized siteConfig Verification', () => {
  it('has exact brand name YUSERTECH and correct tagline', () => {
    expect(siteConfig.brand.name).toBe('YUSERTECH');
    expect(siteConfig.brand.tagline).toBe('Technology That Works for Your Business.');
  });

  it('defines the required brand color palette system', () => {
    expect(siteConfig.colors.forestGreen).toBe('#123B2A');
    expect(siteConfig.colors.warmGold).toBe('#D6B46A');
    expect(siteConfig.colors.offWhite).toBe('#F7F5EF');
    expect(siteConfig.colors.charcoal).toBe('#202722');
    expect(siteConfig.colors.white).toBe('#FFFFFF');
    expect(siteConfig.colors.mutedGray).toBe('#6B746E');
  });

  it('contains all 7 required business services with full details', () => {
    expect(siteConfig.services.length).toBe(7);
    const serviceIds = siteConfig.services.map((s) => s.id);
    expect(serviceIds).toContain('website-development');
    expect(serviceIds).toContain('web-application-development');
    expect(serviceIds).toContain('retail-pos-software');
    expect(serviceIds).toContain('bakery-pos-software');
    expect(serviceIds).toContain('madrasa-management-system');
    expect(serviceIds).toContain('custom-software-development');
    expect(serviceIds).toContain('maintenance-and-support');

    siteConfig.services.forEach((s) => {
      expect(s.problemSolved).toBeTruthy();
      expect(s.targetAudience).toBeTruthy();
      expect(s.benefits.length).toBeGreaterThan(0);
      expect(s.deliverables.length).toBeGreaterThan(0);
      expect(s.nextStep).toBeTruthy();
    });
  });

  it('contains the three required software products with valid statuses', () => {
    expect(siteConfig.products.length).toBe(3);
    const validStatuses = ['Available', 'In Development', 'Coming Soon'];
    siteConfig.products.forEach((p) => {
      expect(validStatuses).toContain(p.status);
      expect(p.slug).toBeTruthy();
      expect(p.specs.platform).toBeTruthy();
      expect(p.specs.offlineSupport).toBeTruthy();
    });
  });

  it('has honest contact placeholders and disabled live backend flag', () => {
    expect(siteConfig.contact.email).toContain('@');
    expect(siteConfig.contact.isLiveBackendConfigured).toBe(false);
  });
});
