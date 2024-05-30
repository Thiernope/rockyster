import { MigrationInterface, QueryRunner } from 'typeorm';

export class Sedc1717016547916 implements MigrationInterface {
  name = 'Sedc1717016547916';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "country" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "country"`);
  }
}
