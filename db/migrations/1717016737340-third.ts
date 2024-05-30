import { MigrationInterface, QueryRunner } from 'typeorm';

export class Third1717016737340 implements MigrationInterface {
  name = 'Third1717016737340';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "country"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "country" character varying NOT NULL`,
    );
  }
}
